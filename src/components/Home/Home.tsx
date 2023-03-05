import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import image from "../../assets/main-img.gif";
import {toast} from "react-toastify";

interface Person {
    name: string;
    age: number;
}

const Home = () => {
    const initialValues = {
        expenseName: '',
        expenseDesc: '',
        expenseType: '',
        sendTo: '',
    };
    const expenseTypesArr = [
        'Plumber',
        'Plumbing Material',
        'Building Material',
        'Tile',
        'Mistri',
        'Mazdur',
    ];

    const validationSchema = Yup.object({
        expenseName: Yup.string().required('Expense name is required'),
        expenseDesc: Yup.string().required('Expense Desc is required'),
        sendTo: Yup.string().required('Send To is required'),
        expenseType: Yup.string().required('Expense Type is required')
    });

    const onSubmit = (values : any, {resetForm}: any) => {

        const data: Person[] = JSON.parse(localStorage.getItem('myData') || '[]');
        data.push(values);
        localStorage.setItem('myData', JSON.stringify(data));
        resetForm();
        toast.success('Expense added successfully!', {
            position: toast.POSITION.BOTTOM_CENTER,
        });
    };

    return (
        <div className="max-w-6xl mx-auto">
            <img src={image} className="max-w-5xl mx-auto" alt=""/>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ errors, touched }) => (
                    <Form className="p-4">
                        <div className="mb-4">
                            <Field
                                type="text"
                                name="expenseName"
                                placeholder="Expense Name"
                                className={`p-2 w-full rounded border ${
                                    touched.expenseName && errors.expenseName ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            <ErrorMessage name="expenseName" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <Field
                                as="select"
                                name="expenseType"
                                id="expenseType"
                                className={`p-2 w-full rounded border bg-transparent ${
                                    touched.expenseType && errors.expenseType ? 'border-red-500' : 'border-gray-300'
                                }`}
                            >
                                <option value="" className="text-gray-700">Expense Type</option>
                                {expenseTypesArr.map((data: any) =>{
                                    return <option key={data} value={data} className="text-gray-700">{data}</option>
                                })}
                            </Field>
                            <ErrorMessage name="expenseType" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <Field
                                type="text"
                                name="sendTo"
                                placeholder="Recipient Name"
                                className={`p-2 w-full rounded border ${
                                    touched.expenseName && errors.expenseName ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            <ErrorMessage name="expenseName" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                            <Field
                                as="textarea"
                                rows={4}
                                name="expenseDesc"
                                placeholder="Expense Description"
                                className={`p-2 w-full rounded border ${
                                    touched.expenseDesc && errors.expenseDesc ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            <ErrorMessage name="expenseDesc" component="div" className="text-red-500 text-sm mt-1" />
                        </div>


                        <button type="submit" className="bg-teal-500 hover:bg-teal-600 uppercase tracking-widest text-lg
                         text-white py-2 px-4 rounded mt-2 w-full">
                            Add
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Home;