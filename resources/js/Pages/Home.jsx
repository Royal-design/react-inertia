import { Box, Flex, HStack, Skeleton, Text } from "@chakra-ui/react";
import { Link, usePage, Head } from "@inertiajs/react";
import { Pagination } from "../components/Pagination";
import { useRoute } from "../../../vendor/tightenco/ziggy/src/js";
import { useEffect, useState } from "react";
import React from "react";

const Home = ({ posts }) => {
    const { flash } = usePage().props;
    const { component, props } = usePage();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    const [flashMsg, setFlashMesg] = useState(flash.success);
    setTimeout(() => {
        setFlashMesg(null);
    }, 1000);
    console.log(props.posts);
    useEffect(() => {
        setTimeout(() => {
            setData(props.posts.data);
            setLoading(false);
        }, 2000);
    }, []);

    const route = useRoute();
    return (
        <>
            {flashMsg && (
                <Flex justifyContent={"end"}>
                    <Text
                        padding={"0.5rem"}
                        borderRadius={"md"}
                        mb={"1rem"}
                        textColor={"white"}
                        background={"green.300"}
                        width={"15rem"}
                    >
                        {flashMsg}
                    </Text>
                </Flex>
            )}
            {loading ? (
                <div className=" mt-[4rem]">
                    {[...Array(2).keys()].map((_, i) => (
                        <div key={i} className="flex mb-4 justify-center">
                            <div className="flex flex-col gap-2">
                                <Skeleton height="20px" width="50rem" />
                                <Skeleton height="10rem" width="rem" />
                                <Skeleton height="20px" width="10rem" />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <Box>
                    <Head title={component} />
                    <Text className="title">My Blogs </Text>

                    <Box>
                        {data?.map((post, i) => (
                            <article
                                key={i}
                                className="mb-2 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
                            >
                                <div className="rounded-[10px] bg-white p-4 !pt-10 sm:p-6">
                                    <Flex className="items-center justify-between mb-6">
                                        <h1 className="font-bold text-2xl ">
                                            {post.title}
                                        </h1>
                                        <time className="block text-xs text-gray-500">
                                            Posted on{" "}
                                            {new Date(
                                                post.created_at
                                            ).toLocaleTimeString()}
                                        </time>
                                    </Flex>

                                    <Link href={route("posts.show", post)}>
                                        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                            {post.body}
                                        </h3>
                                    </Link>

                                    <div className="my-4 flex flex-wrap gap-1">
                                        <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                            blog
                                        </span>

                                        <Link
                                            className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                                            href={route("posts.show", post)}
                                        >
                                            Read more...
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}

                        <Box>
                            <Pagination posts={posts} />
                        </Box>
                    </Box>
                </Box>
            )}
        </>
    );
};
export default Home;
