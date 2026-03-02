import { Form, Head, usePage } from '@inertiajs/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PasswordInput } from '@/components/ui/password-input';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { SharedData } from '@/types';

export default function Login() {
    const { features } = usePage<SharedData>().props;

    return (
        <AuthLayout
            title="Welcome back"
            description="Enter your credentials to access your account"
            context="login"
        >
            <Head title="Log in" />

            <div className="w-full space-y-6 px-2 py-4">
                <Form
                    {...store.form()}
                    resetOnSuccess={['password']}
                    className="space-y-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="email">Email address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        autoFocus
                                        placeholder="name@company.com"
                                        className="mt-1"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        {features.canResetPassword && (
                                            <TextLink href={request()} className="text-sm">
                                                Forgot?
                                            </TextLink>
                                        )}
                                    </div>
                                    <PasswordInput
                                        id="password"
                                        name="password"
                                        required
                                        placeholder="••••••••"
                                        className="mt-1"
                                    />
                                    <InputError message={errors.password} />
                                </div>
                            </div>

                            <Button type="submit" className="w-full" disabled={processing}>
                                {processing ? (
                                    <Spinner className="mr-2 h-4 w-4" />
                                ) : (
                                    'Log in'
                                )}
                            </Button>
                        </>
                    )}
                </Form>

                <div className="text-center text-sm">
                    Ready to join us?{' '}
                    <TextLink href={register()} className="font-semibold">
                        Create your account
                    </TextLink>
                </div>
            </div>
        </AuthLayout>
    );
}