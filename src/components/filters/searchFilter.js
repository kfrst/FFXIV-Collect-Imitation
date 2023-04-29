import { Formik, Field } from "formik"
import { SearchForm, SearchInput, SearchButton, FilterBTN } from "../styled-components/formElements"
import { sanitizeFormQuery } from "../../features/util"
import { useNavigate } from "react-router-dom"
export const SearchFilter = (props) => {
  const { openModal, onSubmit } = props
  const navigate = useNavigate()
  return (
    <Formik
      initialValues={{ q: "" }}
      onSubmit={(values) => {
        values.q !== "" ? onSubmit(sanitizeFormQuery(values.q)) : navigate(".")
      }}
    >
      {({ handleSubmit }) => (
        <SearchForm onSubmit={handleSubmit}>
          <Field name="q" as={SearchInput} placeholder="Name" type="input" />
          <FilterBTN type="button" onClick={openModal} />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
      )}
    </Formik>
  )
}