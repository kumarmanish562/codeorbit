"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { UserButton, useUser } from "@clerk/nextjs"

const courses = [
  {
    id: 1,
    name: "HTML",
    desc: "Learn the fundamentals of HTML and build the structure of modern web pages.",
    path: "/course/1/detail",
  },
  {
    id: 2,
    name: "CSS",
    desc: "Master CSS to style and design responsive, visually appealing web layouts.",
    path: "/course/2/detail",
  },
  {
    id: 3,
    name: "React",
    desc: "Build dynamic and interactive web applications using the React JavaScript library.",
    path: "/course/3/detail",
  },
  {
    id: 4,
    name: "React Advanced",
    desc: "Deep dive into advanced React concepts including hooks, state management, performance optimization, and architectural patterns.",
    path: "/course/4/detail",
  },
  {
    id: 5,
    name: "Python",
    desc: "Learn Python programming from basics to intermediate level, covering logic building, functions, and real-world applications.",
    path: "/course/5/detail",
  },
  {
    id: 6,
    name: "Python Advanced",
    desc: "Master advanced Python concepts such as OOP, modules, APIs, data processing, and automation.",
    path: "/course/6/detail",
  },
  {
    id: 7,
    name: "Generative AI",
    desc: "Explore prompt engineering, LLMs, embeddings, image generation, and build GenAI-powered applications.",
    path: "/course/7/detail",
  },
  {
    id: 8,
    name: "Machine Learning",
    desc: "Understand ML concepts, algorithms, data preprocessing, model training, evaluation, and deployment.",
    path: "/course/8/detail",
  },
  {
    id: 9,
    name: "JavaScript",
    desc: "Learn core JavaScript concepts, asynchronous programming, DOM manipulation, and modern ES6+ features.",
    path: "/course/9/detail",
  },
]

function Header() {

    const {user} = useUser();


  return (
    <header className="w-full">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="CodeOrbit logo"
            width={40}
            height={40}
          />
          <span className="font-game text-3xl font-bold">CodeOrbit</span>
        </Link>

        {/* Navbar */}
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            {/* Courses dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Courses
              </NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid gap-2 p-2 md:w-[400px] md:grid-cols-2 lg:w-[500px] xl:w-[600px]">
                  {courses.map((course) => (
                    <li key={course.id}>
                      <NavigationMenuLink
                        render={<Link href={course.path} />}
                        className="block h-full whitespace-normal p-3"
                      >
                        <span className="block font-game font-medium">
                          {course.name}
                        </span>
                        <span className="mt-1 block text-sm font-game text-muted-foreground">
                          {course.desc}
                        </span>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Projects */}
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/projects" />}
                className="p-2"
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Pricing */}
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/pricing" />}
                className="p-2"
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact Us */}
            <NavigationMenuItem>
              <NavigationMenuLink
                render={<Link href="/contact" />}
                className="p-2"
              >
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Sign Up */}
       {!user ?
       <Link href="/sign-in">
       <Button className="font-game text-2xl" variant="pixel">
          Sign Up
        </Button>
        </Link>
        : <div className="flex items-center gap-4">
            <Button className="font-game text-2xl" variant="pixel">
              Dashboard
            </Button>
            <UserButton/>

        </div> }
      </div>
    </header>
  )
}

export default Header