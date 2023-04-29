import { Formik, Field } from "formik"
import { FilterForm, Select, CheckBox, SubmitBTN } from "../styled-components/formElements"

export const NormalFilter = (props) => {
  const { filters, onSubmit, closeModal } = props
  return (
    <Formik
      initialValues={filters}
      onSubmit={(values) => {
        onSubmit(values)
      }}
    >
      {({ handleSubmit }) => (
        <FilterForm onSubmit={handleSubmit}>
          {/* Every collectable has its own filters, so it render based on props */}
          {filters.hasOwnProperty("isOwned") && (
            <Field name="isOwned" as={Select}>
              <option value="all">Show All</option>
              <option value="owned">Only Owned</option>
              <option value="missing">Only Missing</option>
            </Field>
          )}
          {filters.hasOwnProperty("tradeable") && (
            <Field name="tradeable" as={Select}>
              <option value="all">Any Tradeability</option>
              <option value="tradeable">Only Tradeable</option>
              <option value="untradeable">Only Untradeable</option>
            </Field>
          )}
          {filters.hasOwnProperty("isPremium") && (
            <CheckBox.Label>
              <Field name="isPremium" as={CheckBox} type="checkbox" />
              Exclude Premium
            </CheckBox.Label>
          )}
          {filters.hasOwnProperty("isLimited") && (
            <CheckBox.Label>
              <Field name="isLimited" as={CheckBox} type="checkbox" />
              Exclude Time Limited
            </CheckBox.Label>
          )}
          {filters.hasOwnProperty("unknown") && (
            <CheckBox.Label>
              <Field name="unknown" as={CheckBox} type="checkbox" />
              Exclude Unknown
            </CheckBox.Label>
          )}
          <hr />
          <SubmitBTN type="submit" onClick={closeModal}>
            Apply Filters
          </SubmitBTN>
        </FilterForm>
      )}
    </Formik>
  )
}