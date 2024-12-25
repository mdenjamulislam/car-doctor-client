import React from 'react';

const Signup = () => {

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);
    };


    return (
        <section className="py-8">
            <div className="container">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div>
                        <img src={loginHero} alt="" />
                    </div>
                    <Card shadow={false} className="border border-gray-300 py-8 md:px-14 md:py-10">
                        <CardHeader shadow={false} floated={false} className="text-center">
                            <Typography variant="h1" color="blue-gray" className="!text-3xl lg:text-4xl">
                                Sign Up
                            </Typography>
                        </CardHeader>
                        <CardBody>
                            <form onSubmit={handleSignup} className="flex flex-col gap-4">
                                <div>
                                    <label htmlFor="name">
                                        <Typography variant="small" color="blue-gray" className="mb-2 block font-medium">
                                            Full Name
                                        </Typography>
                                    </label>
                                    <Input
                                        id="name"
                                        color="gray"
                                        size="lg"
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        className="!w-full !border-t-blue-gray-200 placeholder:!opacity-100 focus:!border-t-primary"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">
                                        <Typography variant="small" color="blue-gray" className="mb-2 block font-medium">
                                            Your Email
                                        </Typography>
                                    </label>
                                    <Input
                                        id="email"
                                        color="gray"
                                        size="lg"
                                        type="email"
                                        name="email"
                                        placeholder="name@mail.com"
                                        className="!w-full !border-t-blue-gray-200 placeholder:!opacity-100 focus:!border-t-primary"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">
                                        <Typography variant="small" color="blue-gray" className="mb-2 block font-medium">
                                            Password
                                        </Typography>
                                    </label>
                                    <Input
                                        id="password"
                                        color="gray"
                                        size="lg"
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        className="!w-full !border-t-blue-gray-200 placeholder:!opacity-100 focus:!border-t-primary"
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                    />
                                </div>
                                <Button type="submit" size="lg" color="gray" fullWidth>
                                    Sign Up
                                </Button>
                            </form>
                            <div className="mt-8 space-y-4 text-center">
                                <p>Or Login With</p>
                                <div className="flex items-center justify-center gap-4">
                                    <IconButton variant="text">
                                        <FaFacebookF />
                                    </IconButton>
                                    <IconButton variant="text">
                                        <FaLinkedinIn />
                                    </IconButton>
                                    <IconButton variant="text">
                                        <FaFacebookF />
                                    </IconButton>
                                </div>
                                <p>
                                    Already have an account?{" "}
                                    <a href="/login" className="text-accent">
                                        Login
                                    </a>
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Signup;