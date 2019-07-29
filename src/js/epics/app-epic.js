import { ofType } from "redux-observable"
import { map, mergeMap, switchMap } from "rxjs/operators"
import { from } from "rxjs"
import { ajax } from "rxjs/ajax"
import _ from "lodash"

import AppActionNames from "../action-names/app-action-names"

const { FETCH_CREDIT, FETCH_CREDIT_SUCCESS } = AppActionNames

export function fetchCredit(action$) {
  return action$.pipe(
    ofType(FETCH_CREDIT),
    switchMap(() => {
      return ajax.get("http://api.tvmaze.com/people/1/castcredits").pipe(
        map(response => {
          const characterList = response.response.map(resp => {
            return resp._links.character.href
          })

          return characterList
        }),
        switchMap(list => {
          const observableList = from(list)

          return observableList.pipe(
            mergeMap(url => {
              return ajax.get(url).pipe(
                map(resp => {
                  return {
                    type: FETCH_CREDIT_SUCCESS,
                    payload: resp.response.name
                  }
                })
              )
            })
          )
        })
      )
    })
  )
}
