import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Notification from 'actions/notification'
import { graphql } from 'react-apollo'
import { createGroupQuery } from 'components/vk/graphql/querues'

const InputField = (props) => {
  return (
    <div className="form-group row">
      <div className="col-md-12">
        <div className="input-group">
          <span className="input-group-addon">{ props.name }</span>
          <input
            className="form-control"
            name={ props.name }
            placeholder={ props.name }
            onChange={ props.onChange }
            onKeyPress={props.onKeyPress}
          />
        </div>
      </div>
    </div>
  )
}

class New extends Component {

  static propTypes = {
    refetch: PropTypes.func.isRequired,
    createGroupQuery: PropTypes.func.isRequired,
  }

  state = {
    open: false,
    group: {},
    attributes: [
      "name",
      "members_count",
      "note",
    ]
  }

  handleSetState = (e) => {
    const { name, value } = e.target
    let { group } = this.state
    group[name] = value
    this.setState({ group })
  }

  handleCreate = async (e) => {
    e.preventDefault()
    const { dispatch, createGroupQuery, refetch } = this.props
    const { group } = this.state

    try {
      await createGroupQuery({
        variables: {
          input: group,
        },
      })
      refetch()
      dispatch(Notification.success("create group"))
    } catch (err) {
      dispatch(Notification.error(err.message))
    }
  }

  handleChangeTag = (val) => {
    let { group } = this.state
    group.tag_id = val.id
    this.setState({ group })
  }

  handleOnKeyPress = (target) => {
    if (target.charCode === 13) { this.handleCreate() }
  }

  handleCard = () => {
    this.setState({ open: !this.state.open })
  }

  renderCardBlock = () => {
    const { attributes } = this.state
    return (
      <div className="card-block animated fadeIn">
        <form className="form-2orizontal">

          { attributes.map((attribute, index) =>
            <InputField
              key={index}
              onChange={this.handleSetState.bind(this)}
              onKeyPress={ this.handleOnKeyPress.bind(this) }
              name={attribute}
            />
          )}

          <div className="form-actions">
            <button
              className="btn btn-primary"
              onClick={this.handleCreate}
            >Save changes</button>

            &nbsp;

            <button
              onClick={this.handleCard}
              className="btn btn-default"
            >Cancel</button>
          </div>

        </form>
      </div>
    )
  }

  render() {
    const { open } = this.state

    return (
      <div className="row">
        <div className="col-lg-12">

          <div className="card">

            <div className="card-header">
              <i className="pointer fa fa-align-justify"/> Create Group
              <div className="card-actions pointer ">
                <a onClick={this.handleCard} className="btn-minimize">
                  <i className={ open ? "icon-arrow-up" : "icon-arrow-down"} />
                </a>
              </div>
            </div>

            { open ? this.renderCardBlock() : null }

          </div>
        </div>
      </div>
    )
  }

}

export default connect()(
  graphql(createGroupQuery, { name: "createGroupQuery" })(New)
)
