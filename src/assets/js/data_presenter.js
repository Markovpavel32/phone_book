import _ from 'lodash'

class SortableUsers {
  constructor (users) {
    this.users = users
    this.sort_obj = {
      sort_by_first_up: sort_by(this.users, 'name.first', 'up'),
      sort_by_first_down: sort_by(this.users, 'name.first', 'down'),
      sort_by_last_up: sort_by(this.users, 'name.last', 'up'),
      sort_by_last_down: sort_by(this.users, 'name.last', 'down'),
      sort_by_date_up: sort_by(this.users, 'dob.date', 'up'),
      sort_by_date_down: sort_by(this.users, 'dob.date', 'down'),
      'no-sorting': () => this.users
    }
  }

  sort_by (sort_by) {
    return this.sort_obj[sort_by]()
  }
}

const sorting_func = (a, b) => {
  console.log(a > b)
  if (!isNaN(Date.parse(a))) return new Date(b) - new Date(a)
  return a.localeCompare(b)
}

const sort_by = (arr, path, direction) => {
  return () => {
    if (direction === 'down') return arr.sort((a, b) => sorting_func(_.get(a, path), _.get(b, path)))
    return arr.sort((a, b) => sorting_func(_.get(b, path), _.get(a, path)))
  }
}

export {
  SortableUsers
}
