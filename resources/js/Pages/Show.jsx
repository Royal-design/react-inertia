import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy/src/js";
import React from "react";

const Show = ({ post }) => {
    const { delete: destroy } = useForm();
    const route = useRoute();

    const handleDelete = (e) => {
        e.preventDefault();
        destroy(route("posts.destroy", post));
    };

    return (
        <Box pt={"1rem"}>
            <article className="mb-2  hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                <div className="rounded-[10px] bg-white p-4 !pt-10 sm:p-6">
                    <Flex className="items-center justify-between mb-6">
                        <h1 className="font-bold text-2xl ">{post.title}</h1>
                        <time className="block text-xs text-gray-500">
                            Posted on{" "}
                            {new Date(post.created_at).toLocaleTimeString()}
                        </time>
                    </Flex>

                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        {post.body}
                    </h3>

                    <Flex className="mt-4" justifyContent={"space-between"}>
                        <div className="mt-4 flex flex-wrap gap-1">
                            <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                                blog
                            </span>
                        </div>
                        <Flex>
                            <Box mx="1rem">
                                <form onSubmit={handleDelete}>
                                    <Button type="submit" colorScheme="red">
                                        X
                                    </Button>
                                </form>
                            </Box>

                            <Link href={route("posts.edit", post)}>
                                <Button bg={"green"} colorScheme="green">
                                    update
                                </Button>
                            </Link>
                        </Flex>
                    </Flex>
                </div>
            </article>
        </Box>
    );
};

export default Show;
