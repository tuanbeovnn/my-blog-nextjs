import { useForm } from "react-hook-form";
import slugify from "slugify";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Radio } from "../../components/checkbox";
import { Dropdown } from "../../components/dropdown";
import { Field, FieldCheckboxes } from "../../components/field";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import Toggle from "../../components/toggle/Toggle";
import { postStatus } from "../../utils/constants";
// import wrapper from "../../redux/configureStore";
// import typeAction from '../../redux/actions/admin';
import React, { useState, useMemo, Children } from "react";
import "react-quill/dist/quill.snow.css";
import { connect, useDispatch } from "react-redux";
import ReactQuill, { Quill } from "react-quill";
import ImageUpload from "../../components/image/ImageUpload";
import ImageUploader from "../../components/blots/quill.imageUploader";
import axios from "axios";
import adminAction from "../../redux/actions/admin";
import { toast } from "react-toastify";
import Router from 'next/router';
Quill.debug("warn");
Quill.register("modules/imageUploader", ImageUploader);

const PostAddNewStyles = styled.div`
  .tag-item {
    position: relative;
    padding-right: 40px;
    line-height: 1rem;
  }
  .remove-item {
    position: absolute;
    top: calc(50% - 10px);
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    background-color: #aba5a5;
    color: white;
    text-align: center;
    font-size: 18px;
    line-height: 18px;
    padding-top: 1px;
    /* transform: rotate(45deg); */
    font-weight:bold ;
    font-style:normal ;
    cursor: pointer;
  }
  .remove-item:hover {
    background-color:#F00 ;
  }
`;

const PostAddNew = (props) => {
    const [selectCategory, setSelectCategory] = useState(1);
    const [selectTag, setSelectTag] = useState([]);
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState("");
    const [thumnail, setThumnail] = useState("");


    const { control, watch, setValue, handleSubmit, getValues, reset } = useForm({
        mode: "onChange",
        defaultValues: {
            title: "",
            slug: "",
            metaTitle: "",
            imgIds: []
        },
    });
    const watchStatus = watch("status");
    const watchCategory = watch("category");
    const watchHot = watch("hot");

    const addPostHandler = async (values) => {
        setLoading(true);
        const cloneValues = { ...values };
        cloneValues.slug = slugify(values.slug || values.title, { lower: true });
        const data = {
            ...values,
            slug: slugify(values.slug || values.title, { lower: true }),
            content,
            fileIds: values.imgIds
        };

        delete data.file;
        delete data.imgIds;
        const body = new FormData();
        body.append("data", JSON.stringify(data));
        body.append("file", values.file);
        const { dispatch } = props;
        dispatch({
            type: adminAction.ADD_POST,
            payload: body,
            callback: res => {
                if (res?.success) {
                    toast.success("Add post successfully");
                    setLoading(false)
                    Router.push('/');
                } else {
                    toast.error(res.response?.data.message);
                }
            }
        })

    };

    const handleUploadImage = (file) => { };
    const onSelectImage = (e) => {
        const file = e.target.files[0];
        if (!file) {
            setThumnail("");
            setValue("file", "")
        }
        setThumnail(URL.createObjectURL(file))
        setValue("file", file)

    };

    const handleDeleteImg = () => {
        setThumnail("");
        setValue("file", "")
    };

    const handleClickOption = (item) => {
        setValue("categoryId", item.id);
        setSelectCategory(item);
    };

    const handleClickOptionTag = (item) => {
        const tagIds = getValues("tagIds") || [];
        if (tagIds.includes(item.id)) {
            return;
        }

        setValue("tagIds", [...tagIds, item.id]);
        setSelectTag((state) => [...state, item]);
    };
    const handleRemoveTag = (item) => {
        const tagIds = getValues("tagIds") || [];
        setValue("tagIds", tagIds.filter(i => i !== item.id));
        setSelectTag((state) => state.filter(i => i.id !== item.id));
    }

    React.useEffect(() => {
        document.title = "Monley Blogging - Add new post";
    }, []);

    const modules = useMemo(
        () => ({
            toolbar: [
                ["bold", "italic", "underline", "strike"],
                ["blockquote"],
                [{ header: 1 }, { header: 2 }], // custom button values
                [{ list: "ordered" }, { list: "bullet" }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["link", "image"],
            ],
            imageUploader: {
                upload: async (file) => {
                    try {
                        const bodyFormData = new FormData();
                        bodyFormData.append("files", file);

                        const response = await axios({
                            method: "post",
                            url: "http://bienhoa.ga:8080/v1/api/files",
                            data: bodyFormData,
                            headers: {
                                "Content-Type": "multipart/form-data",
                            },
                        });
                        const imgIds = getValues("imgIds") || [];
                        setValue("imgIds", [...imgIds, response.data.details[0].id])
                        return response.data.details[0].url;
                    } catch (e) {
                        console.log(e)
                    }

                },
            },
        }),
        []
    );

    const { tags, categories } = props;
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
                        // required
                        ></Input>
                    </Field>
                    <Field>
                        <Label>Meta Title</Label>
                        <Input
                            control={control}
                            placeholder="Enter your meta title"
                            name="metaTitle"
                        ></Input>
                    </Field>
                </div>
                <div className="grid grid-cols-2 gap-x-10 mb-10">
                    {/* <Field>
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
                    </Field> */}
                    <Field>
                        <Label>Slug</Label>
                        <Input
                            control={control}
                            placeholder="Enter your slug"
                            name="slug"
                        ></Input>
                    </Field>
                    <Field>
                        <Label>Summary</Label>
                        <Input
                            control={control}
                            placeholder="Enter your summary"
                            name="summary"
                        ></Input>
                    </Field>
                </div>
                <div className="grid grid-cols-2 gap-x-10 mb-20">
                    {/*                    
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
                    </Field> */}
                    <Field>
                        <Label>Category</Label>
                        <Dropdown>
                            <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
                            <Dropdown.List>
                                {categories.length > 0 &&
                                    categories.map((item) => (
                                        <Dropdown.Option
                                            key={item.code}
                                            onClick={() => handleClickOption(item)}
                                        >
                                            {item.name}
                                        </Dropdown.Option>
                                    ))}
                            </Dropdown.List>
                        </Dropdown>
                        {selectCategory?.name && (
                            <span className="inline-block p-4 rounded-lg bg-green-200 text-sm text-green-600 font-medium">
                                {selectCategory.name}
                            </span>
                        )}
                    </Field>
                    <Field>
                        <Label>Thumnail</Label>
                        <ImageUpload
                            onChange={onSelectImage}
                            className="h-[200px]"
                            name="file"
                            image={thumnail}
                            handleDeleteImage={handleDeleteImg}
                        //  progress={}
                        ></ImageUpload>
                    </Field>
                </div>
                <div className="grid grid-cols-2 gap-x-10 mb-40">
                    <Field>
                        <Label>Tag</Label>
                        <Dropdown>
                            <Dropdown.Select placeholder="Select the tag"></Dropdown.Select>
                            <Dropdown.List>
                                {tags.length > 0 &&
                                    tags.map((item) => (
                                        <Dropdown.Option
                                            key={item.id}
                                            onClick={() => handleClickOptionTag(item)}
                                        >
                                            {item.title}
                                        </Dropdown.Option>
                                    ))}
                            </Dropdown.List>
                        </Dropdown>
                        <div className="block gap-5">
                            {selectTag.map((item, index) => {
                                return (
                                    <span
                                        className="tag-item inline-block p-4 rounded-lg bg-green-200 text-sm text-green-600 font-medium mr-3 mb-3"
                                        key={index}
                                    >
                                        {item.title}
                                        <i className="remove-item" title="Delete" onClick={() => handleRemoveTag(item)}>x</i>
                                    </span>
                                );
                            })}
                        </div>
                    </Field>
                </div>

                <div className="grid grid-cols-1 gap-x-10 mb-10">
                    <Field>
                        <Label>Contents</Label>
                        <div className="w-full entry-content">
                            <ReactQuill
                                modules={modules}
                                theme="snow"
                                value={content}
                                onChange={setContent}
                            />
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

export default connect(({ Admin: { posts, categories, tags } }) => ({
    posts,
    categories,
    tags,
}))(PostAddNew);
