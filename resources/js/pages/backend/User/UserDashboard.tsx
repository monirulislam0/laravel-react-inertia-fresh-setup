import { Head } from '@inertiajs/react';
import UserLayout from '@/layouts/user-layout';

export default function UserDashboard() {
    return (
        <UserLayout>
            <Head title="Dashboard" />
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-light text-gray-800 mb-4">Welcome</h1>
                    <p className="text-gray-600">Your dashboard is ready</p>
                </div>
            </div>
        </UserLayout>
    );
}
