/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — the sender's full name
  - `email` (text, not null) — the sender's email address
  - `message` (text, not null) — the body of the inquiry
  - `created_at` (timestamptz, defaults to now()) — when the message was submitted

2. Security
- Enable RLS on `contact_messages`.
- This is a no-auth portfolio site, so anon + authenticated can INSERT new messages.
- No SELECT/UPDATE/DELETE for anon — only inserts are allowed from the public form.
  This prevents anyone from reading or modifying submitted messages via the API.

3. Notes
- The contact form on the Contact page will insert rows here.
- Only INSERT is granted to anon/authenticated; reads are blocked so submitted
  messages are private to the database owner.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);
