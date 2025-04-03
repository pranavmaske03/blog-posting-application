import React from "react";
import { Signup as SignupComponent } from "../components";
import { Container } from "../components";

function Signup() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Container className="max-w-lg w-full shadow-lg bg-white p-6 rounded-xl">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <SignupComponent />
            </Container>
        </div>
    );
}

export default Signup;
