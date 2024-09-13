import {
    Box,
    Button,
    FormControl,
    Textarea,
    Text,
    Input,
} from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const Create = () => {
    const { data, setData, errors, processing, post } = useForm({
        title: "",
        body: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post("/posts");
    };

    return (
        <>
            <Box padding={"1rem"}>
                <Head title="Create" />
                <h1 className="title">Create new post</h1>
                <form onSubmit={submit}>
                    <FormControl>
                        <div className="form-group mb-4">
                            <Input
                                type="text"
                                value={data.title}
                                placeholder="Enter title"
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
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
                                onChange={(e) =>
                                    setData("body", e.target.value)
                                }
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
                            Create Post
                        </Button>
                    ) : (
                        <Button type="submit" width={"100%"}>
                            Create Post
                        </Button>
                    )}
                </form>
            </Box>
        </>
    );
};

export default Create;
