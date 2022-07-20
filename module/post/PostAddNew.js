
import { useForm } from "react-hook-form";
import slugify from "slugify";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Radio } from "../../components/checkbox";
import { Dropdown } from "../../components/dropdown";
import { Field } from "../../components/field";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import Toggle from "../../components/toggle/Toggle";
import { postStatus } from "../../utils/constants";
// import wrapper from "../../redux/configureStore";
// import typeAction from '../../redux/actions/admin';
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import ImageUpload from "../../components/image/ImageUpload";
import ReactQuill from "react-quill";



const PostAddNewStyles = styled.div``;

const PostAddNew = (props) => {

    const [selectCategory, setSelectCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState("");

    const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
        mode: "onChange",
        defaultValues: {
            title: "",
            slug: "",
            status: postStatus.PENDING,
            category: "",
        },
    });
    const watchStatus = watch("status");
    const watchCategory = watch("category");
    const watchHot = watch("hot");

    const addPostHandler = async (values) => {
        setLoading(true);
        const cloneValues = { ...values };
        cloneValues.slug = slugify(values.slug || values.title, { lower: true });
    }

    const handleUploadImage = (file) => {

    }
    const onSelectImage = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        // setValue()
    }

    const handleDeleteImg = () => {

    }

    const handleClickOption = (item) => {
        setValue("code", item.code);
        setSelectCategory(item)
    }

    // useEffect(() => {
    //     document.title = "Monley Blogging - Add new post";
    // }, [])


    const { posts, categories } = props;
    return (
        <PostAddNewStyles>
            <h1 className="dashboard-heading">Add new post</h1>
            <form onSubmit={handleSubmit(addPostHandler)}>
                <div className="grid grid-cols-2 gap-x-10 mb-10">

                    <Field>
                        <Label>Title</Label>
                        <Input
                            control={control}
                            placeholder="Enter your title"
                            name="title"
                            required
                        ></Input>
                    </Field>
                    <Field>
                        <Label>Slug</Label>
                        <Input
                            control={control}
                            placeholder="Enter your slug"
                            name="slug"
                        ></Input>
                    </Field>
                </div>
                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    <Field>
                        <Label>Features</Label>
                        <Toggle
                            on={watchHot === true}
                            onClick={() => setValue("hot", !watchHot)}
                        ></Toggle>

                    </Field>
                    <Field>
                        <Label>Status</Label>
                        <div className="flex items-center gap-x-5">
                            <Radio
                                name="status"
                                control={control}
                                checked={watchStatus === postStatus.APPROVED}
                                onClick={() => setValue("status", "approved")}
                                value={postStatus.APPROVED}
                            >
                                Approved
                            </Radio>
                            <Radio
                                name="status"
                                control={control}
                                checked={watchStatus === postStatus.PENDING}
                                onClick={() => setValue("status", "pending")}
                                value={postStatus.PENDING}
                            >
                                Pending
                            </Radio>
                            <Radio
                                name="status"
                                control={control}
                                checked={watchStatus === postStatus.REJECTED}
                                onClick={() => setValue("status", "reject")}
                                value={postStatus.REJECTED}
                            >
                                Reject
                            </Radio>
                        </div>
                    </Field>
                    <Field>
                        <Label>Author</Label>
                        <Input control={control} placeholder="Find the author"></Input>
                    </Field>
                    <Field>
                        <Label>Category</Label>
                        <Dropdown>
                            <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
                            <Dropdown.List>
                                {categories.length > 0 && categories.map((item) => (
                                    <Dropdown.Option key={item.code} onClick={() => handleClickOption(item)}>{item.name}</Dropdown.Option>
                                ))}
                            </Dropdown.List>

                        </Dropdown>
                        {selectCategory?.name && (
                            <span className="inline-block p-4 rounded-lg bg-green-200 text-sm text-green-600 font-medium">
                                {selectCategory.name}
                            </span>
                        )}


                    </Field>

                </div>
                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    <Field>
                        <Label>Image</Label>
                        <ImageUpload
                            onChange={onSelectImage}
                        //  progress={}
                        >

                        </ImageUpload>
                    </Field>

                </div>
                <div className="grid grid-cols-1 gap-x-10 mb-10">

                    <Field>
                        <Label>Contents</Label>
                        <div className="w-full">
                            <ReactQuill theme="snow" value={content} onChange={setContent} />
                        </div>
                    </Field>
                </div>
                <Button type="submit" className="mx-auto w-[250px]" isLoading={loading}>
                    Add new post
                </Button>
            </form>
        </PostAddNewStyles>
    );
};

export default (connect(({ Admin: { posts, categories } }) => ({ posts, categories }))(PostAddNew));

