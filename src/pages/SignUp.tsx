import { Button, Form, Input } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format!")
    .required("Please enter your email!"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters!")
    .required("Please enter your password!"),
});

const SignUp = () => {
  const [form] = Form.useForm();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Submitted data:", values);
      form.resetFields();
    },
  });

  useEffect(() => {
    form.setFieldsValue(formik.values);
  }, [formik.values, form]);

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>
        <Form
          layout="vertical"
          form={form}
          onFinish={formik.handleSubmit}
          className="space-y-4"
        >
          <Form.Item
            label={<span className="text-gray-700 font-medium">Email</span>}
            name="email"
            validateStatus={
              formik.touched.email && formik.errors.email ? "error" : ""
            }
            help={
              formik.touched.email && formik.errors.email ? (
                <span className="text-red-500">{formik.errors.email}</span>
              ) : null
            }
          >
            <Input
              placeholder="Enter your email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </Form.Item>
          <Form.Item
            label={<span className="text-gray-700 font-medium">Password</span>}
            name="password"
            validateStatus={
              formik.touched.password && formik.errors.password ? "error" : ""
            }
            help={
              formik.touched.password && formik.errors.password ? (
                <span className="text-red-500">{formik.errors.password}</span>
              ) : null
            }
          >
            <Input.Password
              placeholder="Enter your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </Form.Item>
          <Form.Item className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-10 text-lg font-medium bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
