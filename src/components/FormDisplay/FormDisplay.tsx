import React from 'react';
import './FormDisplay.css';
import { FormField } from '../../types';

interface FormDisplayProps {
  formTitle: string;
  formFields: FormField[];
}

const FormDisplay: React.FC<FormDisplayProps> = ({ formTitle, formFields }) => {
  return (
    <div className="form-container">
      <h2>{formTitle}</h2>
      <form>
        {formFields.map((field, index) => (
          <div key={index} className="form-field">
            <label>{field.title}</label>
            {field.type === 'multiple-choice' && field.options ? (
              field.options.map((option, idx) => (
                <div key={idx}>
                  <input type="radio" id={option} name={field.title} value={option} />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))
            ) : (
              <input type={field.type} />
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormDisplay;
