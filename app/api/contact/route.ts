import { NextResponse } from 'next/server';
import { ensureContactTable, getPool } from '@/lib/db';

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function sanitize(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const fullName = sanitize(body.fullName);
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const message = sanitize(body.message);

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { message: 'Full name, email, and phone are required.' },
        { status: 400 }
      );
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: 'Please provide a valid email.' }, { status: 400 });
    }

    await ensureContactTable();
    const pool = getPool();

    await pool.execute(
      `INSERT INTO contact_requests (full_name, email, phone, message)
       VALUES (?, ?, ?, ?)`,
      [fullName, email, phone, message || null]
    );

    return NextResponse.json({ message: 'Thanks! We will contact you shortly.' }, { status: 201 });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { message: 'Server error. Please try again in a moment.' },
      { status: 500 }
    );
  }
}
