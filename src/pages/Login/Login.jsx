import loginHero from "../../assets/images/login/login.svg";
import { Card, Input, Button, CardBody, CardHeader, Typography, IconButton } from "@material-tailwind/react";
import { useContext } from "react";
import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider";
const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => console.log(error.message));
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
                                Login
                            </Typography>
                        </CardHeader>
                        <CardBody>
                            <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
                                    <label htmlFor="email">
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
                                    Login
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
                                    Are you new?{" "}
                                    <a href="/signup" className="text-accent">
                                        Sign Up
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

export default Login;
