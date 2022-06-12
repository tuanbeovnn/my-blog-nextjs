import React from 'react';
import styled from 'styled-components';
import { Input } from '../components/input';
import { Label } from '../components/label';
import { useForm } from "react-hook-form";
import { Field } from '../components/field';
import { IconEyeClose, IconEyeOpen } from '../components/icon';
import { Button } from '../components/button';

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import Link from 'next/link';
import InputPasswordToggle from '../components/input/InputPasswordToggle';
import PostImage from '../module/post/PostImage';

const SignUpPageStyled = styled.div`
    min-height: 100vh;
    padding: 40px;
    .logo {
        margin: 0 auto 20px;
        cursor: pointer;
    }
    .heading {
        text-align: center;
        color: ${(props) => props.theme.primary};
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 60px;
    }
    .form {
        max-width: 800px;
        margin: 0 auto;
    }
    .have-account {
        margin-bottom: 20px;
        a {
          display: inline-block;
          color: ${(props) => props.theme.primary};
          font-weight: 500;
        }
    }
`;

const schema = yup.object({
    fullname: yup.string().required("Please enter your fullname"),
    email: yup
        .string()
        .email("Please enter valid email address")
        .required("Please enter your email address"),
    password: yup
        .string()
        .min(8, "Your password must be at least 8 characters or greater")
        .required("Please enter your password"),
});


const SignUpPage = () => {
    const { control, handleSubmit, formState: { errors, isSubmitting, isValid }, watch, reset } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
    const [togglePassword, setTogglePassword] = React.useState(false);
    const handleSignUp = (values) => {
        console.log(values)
        if (!isValid) return; // kiem tra form isValid

        console.log(values)
    }

    React.useEffect(() => {
        const arrErrors = Object.values(errors);
        if (arrErrors.length > 0) {
            toast.error(arrErrors[0]?.message, { pauseOnHover: false, delay: 0 });
        }
    })
    return (
        <SignUpPageStyled>
            <div className='container'>
                <Link href={"/"}>
                    <img srcSet="/logo.png 2x" alt="monkey-blogging" className="logo" />
                </Link>
                <h1 className='heading'> Monkey Blog</h1>
                <form className='form' onSubmit={handleSubmit(handleSignUp)} autoComplete="off">
                    <Field>
                        <Label htmlFor='fullname'>
                            Fullname
                        </Label>
                        <Input
                            type="text"
                            name="fullname"
                            placeholder="Enter your fullname"
                            control={control}
                        />
                    </Field>
                    <Field>
                        <Label htmlFor='email'>
                            Email
                        </Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            control={control}
                        />
                    </Field>
                    <Field>
                        <Label htmlFor='password'>
                            Password
                        </Label>
                        <InputPasswordToggle control={control}>
                            {!togglePassword ? <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose> : <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>}

                        </InputPasswordToggle>
                    </Field>
                    <div className="have-account">
                        You already have an account? <Link href={"/sign-in"}>Login</Link>{" "}
                    </div>
                    <Button type='submit' style={{
                        width: "100%",
                        maxWidth: 300,
                        margin: "0 auto",
                    }} isLoading={isSubmitting}
                        disabled={isSubmitting}>Sign Up</Button>
                </form>
            </div>
        </SignUpPageStyled>
    );
};

export default SignUpPage;