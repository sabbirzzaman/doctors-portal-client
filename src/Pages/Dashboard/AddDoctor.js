import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { data: treatments, isLoading } = useQuery('treatments', () =>
        fetch('http://localhost:5000/treatments').then((res) => res.json())
    );

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        const image = data.image[0];

        const formData = new FormData();
        formData.append('image', image);
        
        fetch(
            `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_API_KEY}`,
            {
                method: 'POST',
                body: formData,
            }
        )
            .then((res) => res.json())
            .then((result) => {
                if (result.success) {
                    const img = result.data.url;

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img,
                    };

                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem(
                                'accessToken'
                            )}`,
                        },
                        body: JSON.stringify(doctor),
                    })
                        .then((res) => res.json())
                        .then((inserted) => {
                            if (inserted.insertedId) {
                                toast.success('Doctor inserted successfully!');
                                reset()
                            } else {
                                toast.error('Failed to insert a doctor!');
                            }
                        });
                }
            });
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
