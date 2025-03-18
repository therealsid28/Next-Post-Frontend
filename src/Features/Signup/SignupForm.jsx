import { AppAlert } from '@/components/AppAlert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { useForm } from 'react-hook-form';

function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="flex flex-col w-full gap-2">
            <div>
              <Input
                placeholder="Jon Doe"
                {...register('name', { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Input
                placeholder="jondoe@gmail.com"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div>
              <Input
                placeholder="Password"
                type="password"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <Button
            type="submit"
            variant="outline"
            className="cursor-pointer mt-4"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
