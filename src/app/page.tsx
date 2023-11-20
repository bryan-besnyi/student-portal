"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Navbar } from "./Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { ExternalLink, Info, KeyRound } from "lucide-react";

const portalApplicationItems = [
  {
    title: "Canvas",
    content: "Dive into course materials, submit tasks, and track grades.",
    imgUrl: "/canvas.webp",
    imgHeight: 321,
    imgWidth: 1095,
    moreInformationPage: "/canvas",
    signInUrl: "https://my.smccd.edu/canvas/",
    canSignIn: true,
    relatedSoftware: [1, 2, 3],
  },
  {
    title: "WebSmart",
    content: "Manage your student account, enroll in classes, and view aid.",
    imgUrl: "/websmart.png",
    imgHeight: 200,
    imgWidth: 528,
    moreInformationPage: "/websmart",
    signInUrl: "https://websmart.smccd.edu/",
    canSignIn: true,
  },
  {
    title: "WebSchedule",
    content: "Explore the class schedule, find your next course, and more.",
    imgUrl: "/webschedule.png",
    imgHeight: 100,
    imgWidth: 264,
    moreInformationPage: "/webschedule",
    signInUrl: "https://webschedule.smccd.edu/",
    canSignIn: false,
  },
];

export default function Home() {
  return (
    <>
      <header className="flex p-4 items-center">
        <Image
          src="/smccd-horizontal-blue.svg"
          alt="SMCCCD Logo"
          width={300}
          height={100}
          className="mr-10"
        />
        <Navbar />
        <Button variant="default" className="ml-auto">
          Need Help?
        </Button>
      </header>
      <section className="h-64 bg-gradient-to-bl from-slate-600 to-indigo-600 flex justify-center items-center">
        <h1 className="text-6xl font-serif text-white text-center">
          SMCCCD <br />
          Student Portal
        </h1>
      </section>
      <main className="bg-gray-100 flex min-h-screen flex-col p-24">
        <Tabs defaultValue="applications">
          <div className="flex justify-center mb-10">
            <TabsList>
              <TabsTrigger className="text-2xl" value="applications">
                Applications
              </TabsTrigger>
              <TabsTrigger className="text-2xl" value="tutorials">
                Tutorials
              </TabsTrigger>
              <TabsTrigger className="text-2xl" value="support">
                Support
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="applications">
            <section className="container grid grid-cols-1 gap-5 md:grid-cols-3">
              {portalApplicationItems.map((item) => (
                <a title={item.title} key={item.title} href={item.signInUrl}>
                  <div className="group block cursor-pointer">
                    <Card>
                      <CardHeader className="flex flex-col flex-grow">
                        <div className="flex justify-end">
                          <Badge className="max-w-md bg-green-600">
                            Popular
                          </Badge>
                        </div>
                        <div className="flex justify-center items-center h-36 group-hover:bg-slate-50 rounded ">
                          <Image
                            className="object-cover w-full p-5 pb-8 group-hover:scale-105 transition-transform"
                            src={item.imgUrl}
                            alt=""
                            height={item.imgHeight}
                            width={item.imgWidth}
                          />
                        </div>
                        <CardTitle className="text-3xl pt-3 text-indigo-900 group-hover:text-indigo-600 truncate">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-5 text-gray-900 font-medium">
                        {item.content}
                        <div className="flex gap-3 justify-end">
                          {item.moreInformationPage && (
                            <a
                              className="flex justify-center flex-grow rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                              href={item.moreInformationPage}
                            >
                              <span className="sr-only lg:not-sr-only">
                                Information
                              </span>
                              <Info size={20} className="ml-1 inline" />
                            </a>
                          )}
                          <a
                            className="rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                            href={item.signInUrl}
                          >
                            {(item.canSignIn === true
                              ? "Sign In to"
                              : "Access") +
                              " " +
                              item.title}
                            {item.canSignIn === true ? (
                              <KeyRound size={20} className="ml-1 inline" />
                            ) : (
                              <ExternalLink size={20} className="ml-1 inline" />
                            )}
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </a>
              ))}
            </section>
          </TabsContent>
          <TabsContent value="tutorials">
            <section className="container grid grid-cols-3 gap-5">
              ✨
              <Card>
                <CardHeader>
                  <div className="relative group block cursor-pointer w-100 overflow-hidden rounded-xl ">
                    <img
                      className="group-hover:scale-105 transition-transform max-w-full"
                      src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900 opacity-100 rounded-xl hover:opacity-60"></div>
                    <h3 className="text-white text-2xl absolute bottom-4 left-5">
                      How to Enroll
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    A step-by-step guide on how to enroll at one of our campuses
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="relative">
                    <img
                      className="rounded-xl"
                      src="https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900 opacity-90 rounded-xl hover:opacity-60"></div>
                    <h3 className="text-white text-2xl absolute bottom-4 left-5">
                      Register for a Course
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Use WebSchedule, Degree Works, and WebSMART to enroll in
                    your courses!
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="relative">
                    <img
                      className="rounded-xl"
                      src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=3544&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900 opacity-90 rounded-xl hover:opacity-60"></div>
                    <h3 className="text-white text-2xl absolute bottom-4 left-5">
                      Student Educational Plan
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Use WebSchedule, Degree Works, and WebSMART to enroll in
                    your courses!
                  </p>
                </CardContent>
              </Card>
            </section>
          </TabsContent>
          <TabsContent value="support">
            <section className="container animate-in prose-blue lg:prose-xl">
              <h2>Student Support Resources</h2>
              <h3>Admissions & Records</h3>
              <p>
                For questions related to enrolling at one of our campuses,
                course enrollment, dropping courses, transcripts and more!
              </p>
              <div className="grid grid-cols-3 gap-5">
                <Card>
                  <CardHeader className="text-2xl ">Canada College</CardHeader>
                  <CardContent className="group text-lg grid grid-cols-1 gap-4">
                    <span className="block">
                      <span className="opacity-50 group-hover:animate-ping">
                        📞
                      </span>
                      <a className="ml-4" href="tel:650-492-0018">
                        Call
                      </a>
                    </span>
                    <span className="block">
                      📧
                      <a className="ml-4" href="mailto:besnyib@smccd.edu">
                        E-mail
                      </a>
                    </span>
                    <span className="block">
                      <address className="not-italic flex">
                        <span className="opacity-50">📍</span>
                        <a className="ml-4" href="#">
                          Building 9, 1st Floor <br />
                          4200 Farm Hill Blvd., <br />
                          Redwood City, CA 94061
                        </a>
                      </address>
                    </span>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50">
                  <CardHeader className="text-2xl">
                    College of San Mateo
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-2xl">Skyline College</CardHeader>
                </Card>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
