
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";
import { Radio } from "../../components/checkbox";
import { Field, FieldCheckboxes } from "../../components/field";
import { Input } from "../../components/input";
import { Label } from "../../components/label";
import DashboardHeading from "./DashboardHeading";

const CategoryAddNew = () => {
    const [loading, setLoading] = React.useState(false);
    const {
        control,
        setValue,
        formState: { errors, isSubmitting, isValid }, handleSubmit
    } = useForm({
        mode: "onChange",
        defaultValues: {
            title: "",
            slug: "",
            category: "",
        },
    });
    const handleAddNewCategory = (values) => {
    }
    return (
        <div>
            <DashboardHeading
                title="New category"
                desc="Add new category"
            ></DashboardHeading>
            <form onSubmit={handleSubmit(handleAddNewCategory)}>
                <div className="form-layout">
                    <Field>
                        <Label>Name</Label>
                        <Input
                            control={control}
                            name="name"
                            placeholder="Enter your category name"
                        ></Input>
                    </Field>
                    <Field>
                        <Label>Code</Label>
                        <Input
                            control={control}
                            name="code"
                            placeholder="Enter your code"
                        ></Input>
                    </Field>
                </div>
                <div className="form-layout">
                    <Field>
                        <Label>Description</Label>
                        <Input
                            control={control}
                            name="description"
                            placeholder="Enter your description"
                        ></Input>
                    </Field>
                    {/* <FieldCheckboxes>
                        <Label>Status</Label>
                        <div className="flex flex-wrap gap-x-5">
                            <Radio name="status" control={control} checked={true}>
                                Approved
                            </Radio>
                            <Radio name="status" control={control}>
                                Unapproved
                            </Radio>
                        </div>
                    </FieldCheckboxes> */}
                </div>
                <Button kind="primary" className="mx-auto" type="submit" isLoading={loading}>
                    Add new category
                </Button>
            </form>
        </div>
    );
};

export default CategoryAddNew;