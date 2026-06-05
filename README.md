# Springdoo Mattress Website

A full-stack Next.js + TypeScript website for **Springdoo**.

## Features

- Landing page with mattress photos and featured collections.
- Navigation tabs to dedicated mattress type pages:
  - Memory Foam
  - Hybrid
  - Innerspring
- Shared bottom section on every page containing:
  - **Contact us** information
  - **Or we can contact you** form
- MySQL-backed contact form submission API (`/api/contact`) that stores leads.

## Stack

- Next.js 14 (App Router)
- TypeScript
- MySQL (`mysql2`)
- CSS (global stylesheet)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create local environment config:

   ```bash
   cp .env.example .env.local
   ```

3. Ensure MySQL is running and create the database:

   ```sql
   CREATE DATABASE IF NOT EXISTS springdoo;
   ```

4. Run in development:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:3000`.

## Data model

The API auto-creates this table if it does not exist:

```sql
CREATE TABLE contact_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(120) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  message TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
