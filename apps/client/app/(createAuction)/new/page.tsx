import CreateAuction from '@/components/pages/CreateAuction';
import { getAuth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function Page() {
  const { session, user } = await getAuth();
  if (!session) {
    redirect('/sign-in');
  }
  return <CreateAuction user={user} />;
}
