import { Component, Prop, State, h, Watch } from '@stencil/core';

export interface breedInfoType {
  breedName: string,
  subBreedName?: string,
}

@Component({
  tag: 'dog-display',
  styleUrl: 'dog-display.css',
  scoped: true,
})

export class DogDisplay {
  private imageSRC: string;

  @State() loading: boolean =  true;
  @Prop() breedInfo: breedInfoType;

  @Watch('breedInfo')
  onBreedInfoChanged(breedInfo: breedInfoType) {
    console.log("Printing", breedInfo);
    this.loading = true;
    let url = `https://dog.ceo/api/breed/${breedInfo.breedName}${('subBreedName' in breedInfo) ? ('/' + breedInfo.subBreedName) : ''}/images/random`;
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      response.json().then(json => {
        if (json.status != "success") {
          throw new Error(response.statusText);
        } else {
          this.imageSRC = json.message;
          this.loading = false;
        }
      })
    }).catch(err => {
      console.log(err);
    })
  }

  componentWillLoad() {
    this.onBreedInfoChanged(this.breedInfo);
  }

  render() {
    if (this.loading) {
      return (<p>Loading..</p>)
    } else {
      return (
        <img src={this.imageSRC}></img>
      )
    }
  }
}
