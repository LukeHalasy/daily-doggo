import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'dog-list',
  styleUrl: 'dog-list.css',
  scoped: true,
})

export class DogList {
  @State() breedsList: {};
  @State() dogImageURL: string;

  handleSelect(e) {
    console.log(e.target.value);
  }

  componentWillLoad() {
    let url = 'https://dog.ceo/api/breeds/list/all';
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      response.json().then(json => {
        if (json.status != "success") {
          throw new Error(response.statusText);
        } else {
          this.breedsList = json.message;
        }
      })
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    if (!this.breedsList) {
      return (
        <p>Loading</p>
      )
    } else {
      console.log(this.breedsList)
      return (
        <select onInput={(e) => this.handleSelect(e)} name="breeds" id="name">
          {
            Object.keys(this.breedsList).map((breedName) => {
              if (this.breedsList[breedName].length > 0) {
                return (this.breedsList[breedName].map((subBreedName) => {
                  return (<option key={subBreedName} value={JSON.stringify({"breedName": breedName, "subBreedName": subBreedName})}>{
                    subBreedName.charAt(0).toUpperCase() + subBreedName.slice(1) + " " + breedName.charAt(0).toUpperCase() + breedName.slice(1)
                  }</option>)
                }))
              } else {
                return (<option key={breedName} value={JSON.stringify({"breedName": breedName})}>{
                  breedName.charAt(0).toUpperCase() + breedName.slice(1)
                }</option>)
              }
            })
          }
        </select>
      )
    }
  }
}