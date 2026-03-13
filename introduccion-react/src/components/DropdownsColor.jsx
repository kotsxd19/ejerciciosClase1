import React from 'react'

const DropdownsColor = ({}) => {
    return(
        <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Danger
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
    )
}

export default DropdownsColor