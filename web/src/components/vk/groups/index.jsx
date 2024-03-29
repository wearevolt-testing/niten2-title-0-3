import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'react-apollo'
import { groupsQuery } from 'components/vk/graphql/querues'
import Spinner from 'components/shared/spinner'
import Pagination from 'components/shared/pagination'
import Page500 from 'components/shared/page500'
import GroupNew from './new'
import GroupView from './view'

const PER_PAGE = 10

class Groups extends Component {

  static propTypes = {
    groupsQuery: PropTypes.object.isRequired,
  }

  state = {
    attributes: [
      "id",
      "name",
      "members_count",
      "note",
    ]
  }

  render() {
    const { page } = this.props.match.params
    const { meta, loading, error, groups, refetch } = this.props.groupsQuery
    const { attributes } = this.state

    if (loading ) {
      return <Spinner />
    }

    if (error) {
      return <Page500 />
    }

    return (
      <div className="animated fadeIn">

        <GroupNew refetch={refetch}/>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify pointer"></i> Groups
              </div>
              <div className="card-block">
                <table className="table text-center">
                  <thead>
                    <tr>
                      { attributes.map((attribute, index) =>
                        <th key={index} className="text-center">{ attribute }</th>
                      )}

                      <th className="text-center">Edit</th>
                      <th className="text-center">Delete</th>
                    </tr>
                  </thead>
                  <tbody>

                    { groups.map( (object, index) =>
                      <GroupView
                        key={index}
                        object={object}
                        refetch={() => refetch()}
                      />
                    )}

                  </tbody>
                </table>

                <Pagination
                  href="/vk/groups"
                  count={meta.count}
                  currentPage={parseInt(page, 10)}
                  perPage={PER_PAGE}
                />

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default graphql(groupsQuery,
  {
    name: "groupsQuery",
    options: (props) => {
      const limit = PER_PAGE
      const page = parseInt(props.match.params.page, 10)
      const offset = (page - 1) * limit
      return {
        variables: {
          pagination: { limit, offset }
        }
      }
    }
  }
)(Groups)
