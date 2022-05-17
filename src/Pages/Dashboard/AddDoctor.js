import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { data: treatments, isLoading } = useQuery('treatments', () =>
        fetch('http://localhost:5000/treatments').then((res) => res.json())
    );

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    };

    if (isLoading) {
        return <Loading height="50vh"></Loading>;
    }

    return (
        <section className="flex flex-col items-center">
            <h2 className="text-left text-2xl font-bold mb-7">
                Add A New Doctor
            </h2>

            <div className="w-96 p-8 shadow-xl text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="input input-bordered w-full"
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Name is required',
                                },
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && (
                                <span className="label-text-alt text-red-500">
                                    {errors.name.message}
                                </span>
                            )}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your email"
                            className="input input-bordered w-full"
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Email is required',
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/,
                                    message: 'Invalid email address',
                                },
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'pattern' && (
                                <span className="label-text-alt text-red-500">
                                    {errors.email.message}
                                </span>
                            )}
                            {errors.email?.type === 'required' && (
                                <span className="label-text-alt text-red-500">
                                    {errors.email.message}
                                </span>
                            )}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select
                            {...register('specialty')}
                            className="select select-bordered w-full max-w-xs mb-3"
                        >
                            {treatments.map((treatment) => (
                                <option key={treatment._id}>
                                    {treatment.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-control mb-3 w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>

                        <input
                            type="file"
                            className="input input-bordered h-full w-full p-0 rounded-md"
                            {...register('image')}
                        />
                    </div>

                    <input
                        className="btn btn-primary w-full"
                        type="submit"
                        value="Add A Doctor"
                    />
                </form>
            </div>
        </section>
    );
};

export default AddDoctor;
