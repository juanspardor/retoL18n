import React from "react";
import {FormattedDate, FormattedMessage, FormattedNumber} from 'react-intl';

const Job = (props) => {
  return (
    <tr>
      <td>
      <FormattedNumber value = {props.offer.id}/>
      </td>
      <td><FormattedMessage id = {props.offer.name}/></td>
      <td><FormattedMessage id = {props.offer.company}/></td>
      <td><FormattedNumber value = {props.offer.salary}/> <FormattedMessage id="unitSalary"/></td>
      <td><FormattedMessage id = {props.offer.city}/></td>
      
 <td>
  <FormattedDate
    value={new Date(props.offer.date)}
    year='numeric'
    month='long'
    day='numeric'
    weekday='long'
  />
</td>
<td>
<FormattedNumber
  value={props.offer.views}
/>
</td>
    </tr>
   
  );
};

export default Job;
