import {
    Box,
    Button,
    FormControl,
    Textarea,
    Text,
    Input,
} from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy/src/js";
import React from "react";

const Edit = ({ post }) => {
    const route = useRoute();
    const { data, setData, errors, processing, put } = useForm({
        body: post.body,
        title: post.title,
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        put(route("posts.update", post));
    };

    return (
        <Box padding={"1rem"}>
            <Head title="Create" />
            <h1 className="title">Update the post</h1>
            <form onSubmit={handleUpdate}>
                <FormControl>
                    <div className="form-group mb-4">
                        <Input
                            type="text"
                            value={data.title}
                            placeholder="Enter title"
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        {errors.title && (
                            <Text className="text-sm text-red-400 mb-2">
                                {errors.title}
                            </Text>
                        )}
                    </div>
                    <div className="form-group mb-4">
                        <Textarea
                            rows="10"
                            value={data.body}
                            placeholder="Enter the body content"
                            onChange={(e) => setData("body", e.target.value)}
                        ></Textarea>
                        {errors.body && (
                            <Text fontSize={"0.9rem"} color={"red"}>
                                {errors.body}
                            </Text>
                        )}
                    </div>
                </FormControl>
                {processing ? (
                    <Button
                        isLoading
                        type="submit"
                        colorScheme="blue"
                        width={"100%"}
                    >
                        Update Post
                    </Button>
                ) : (
                    <Button type="submit" width={"100%"}>
                        Update Post
                    </Button>
                )}
            </form>
        </Box>
    );
};

export default Edit;
