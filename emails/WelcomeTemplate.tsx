import React, { CSSProperties } from 'react'
import { Button, Html, Body, Container, Text, Link, Preview, Tailwind } from "@react-email/components";

interface Props {
    name: string
}

const WelcomeTemplate = ({name}: Props) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
        <Tailwind>
            <Body className='bg-blue-200' >
                <Container>
                    <Text className='text-3xl'>Hello {name}</Text>
                    <Link href='https://codewithmosh.com'>Click me</Link>
                </Container>
            </Body>
        </Tailwind>

    </Html>
  )
}

const body: CSSProperties =  {

}

export default WelcomeTemplate