import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// შექმნათ ობიექტი რომ მეპის საშუალებით მარტივად შევძლოთ გვერდების ცვლილება
const steps = [
  {
    step: 1,
    fields: [
      {
        name: "firstName",
        label: "First Name",
        type: "text"
      },
    ]
  },
  {
    step: 2,
    fields: [
      {
        name: "email",
        label: "Email",
        type: "email"
      }
    ]
  }
];

// ავღწეროთ yup ის დახმარებით ერორები / შეგიძლიათ გააკეთოთ yupის გარეშეც
const SignupSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!'),
    email: Yup.string()
      .email('Invalid email')
  });
  
const MultiStepForm = () => {
  //განვსაზღვრეთ პირველი რომელი გევრდი იტყვირთება (useState(2) ჩატვირთავდა მეორე გვერდს)
  const [step, setStep] = useState(1);

   return (
    //შევქმენით ინიციალიზების მნიშვნელობები
    <Formik
      initialValues={{
        firstName: "",
        email: "",
      }}
      validationSchema={SignupSchema}
    >
 {({ values, handleChange , errors,  }) => (
        <Form>
    {/* მეპის დახმარებით შევქმენით თითოეულ გვერდზე არსბეული inputები */}
          {steps[step - 1].fields.map(field => (
            <div key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              <Field
                id={field.name}
                name={field.name}
                type={field.type}
                onChange={handleChange}
                value={values[field.name]}
              />
    {/* გამოვიტანეთ შესაბამისი ერორ მესიჯები */}
                {errors.name  && (<div>{errors.name}</div>) }
                    <ErrorMessage name="name" />

             </div>
          ))}
          <button type="button" onClick={() => setStep(step - 1)}>
            Previous
          </button>
          <button type="button" onClick={() => setStep(step + 1)}   >
            Next
          </button>
        {/* გაგზავნის ღილაკს გავთიშავთ მაშინ თუ იარსებებს ერორები */}
          <button type="submit" disabled={errors }>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;


