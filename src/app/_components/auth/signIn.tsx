"use client"
import React from 'react'
import { buttonVariants } from 'fireup/app/_components/ui/button'
import { cn } from 'fireup/lib/utils'
import { getProviders, signIn } from 'next-auth/react'
import Github from 'next-auth/providers/github'

const SignInButton = () => {
  return (
    <div
          onClick={()=>signIn("github")}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8 cursor-pointer"
          )}
        >
          Login
        </div>
  )
}

export default SignInButton