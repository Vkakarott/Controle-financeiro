import { PrismaClient } from '@prisma/client';
import { getSession } from 'next-auth/react';

const prisma = new PrismaClient();

export async function PATCH(req: { json: () => PromiseLike<{ field: any; value: any; }> | { field: any; value: any; }; }) {
  console.log('PATCH /api/user');
  try {
    const session = await getSession({ req: req as any } as any);
    
    if (!session || !session.user?.id) {
      console.log('Session is invalid or missing user ID');
      return new Response('Unauthorized', { status: 401 });
    }

    const { field, value } = await req.json();

    const validFields = ['name', 'email', 'password', 'image', 'data'];
    if (!validFields.includes(field)) {
      console.log(`Invalid field: ${field}`);
      return new Response('Invalid field', { status: 400 });
    }

    const updateData = { [field]: value };

    const updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data: updateData,
    });

    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (error) {
    console.error('Error updating user:', error);
    return new Response('Error updating user', { status: 500 });
  }
}