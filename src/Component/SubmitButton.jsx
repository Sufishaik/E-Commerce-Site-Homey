import { useNavigation } from 'react-router-dom';
import React from 'react';
export const SubmitButton = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <button type='submit' className='btn btn-primary btn-block' disabled={isSubmitting}>
        {
          isSubmitting ? (
            <>
              <span className='loading loading-spinner'></span>
              Sending...
            </>
          ) : (
            text || "submit"
          )
        }
      </button>
    </>
  )
}