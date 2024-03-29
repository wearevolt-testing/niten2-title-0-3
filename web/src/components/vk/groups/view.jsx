import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { Link } from 'lib/nav_link'
import Notification from 'actions/notification'
import { deleteGroupQuery } from 'components/vk/graphql/querues'

class View extends Component {

  static propTypes = {
    object: PropTypes.object.isRequired,
    refetch: PropTypes.func.isRequired,
    deleteGroupQuery: PropTypes.func.isRequired,
  }

  state = {
    person: {},
    attributes: [
      "id",
      "name",
      "members_count",
      "note",
    ]
  }

  // handlerInactive = () => {
  //   let { object } = this.props
  //   // User.setInactive({ id: object.id })
  // }

  handleDestroy = async () => {
    const { dispatch, object, deleteGroupQuery } = this.props

    try {
      await deleteGroupQuery({
        variables: { input: { id: object.id } }
      })
      this.props.refetch()
      dispatch(Notification.success("destroy group"))
    } catch (err) {
      dispatch(Notification.error(err.message))
    }

  }

  render() {
    const { object } = this.props
    const { attributes } = this.state

    return (
      <tr>
        { attributes.map((attribute, index) =>
          <td key={index}>{ object[attribute] }</td>
        )}

        <td>
          <Link href={`/vk/persons/${object.id}`}>
            Edit
          </Link>
        </td>
        <td >
          <div className="text-center" onClick={this.handleDestroy}>
            <i className="pointer icon-ban" />
          </div>
        </td>

      </tr>
    )
  }

}

export default connect()(
  graphql(
    deleteGroupQuery, { name: "deleteGroupQuery"}
  )(View)
)
