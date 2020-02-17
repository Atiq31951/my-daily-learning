import Categories from './category.json'

export function getCategory () {
  return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Categories) 
		}, 3000)
	})
}