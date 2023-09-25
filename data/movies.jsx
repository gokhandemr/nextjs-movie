const baseURL = 'https://api.themoviedb.org/3'
const options = {
    next: { revalidate: 10 },
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_DB_AUTH}`
    }
};

export const getTrending = async (keyword) => {
    try {
        const response = await fetch(`${baseURL}/trending/${keyword}/day?language=tr-TR`, options)
        return response.json()
    } catch (error) {
        throw new Error(error)
    }
}

export const getUpComing = async (keyword) => {
    try {
        const response = await fetch(`${baseURL}/${keyword}?language=tr-TR&page=1`, options)
        return response.json()
    } catch (error) {
        throw new Error(error)
    }
}

export const getTopRated = async (keyword) => {
    try {
        const response = await fetch(`${baseURL}/${keyword}/top_rated?language=tr-TR&page=1`, options)
        return response.json()
    } catch (error) {
        throw new Error(error);
    }
}

export const getGenres = async (keyword) => {
    try {
        const response = await fetch(`${baseURL}/genre/${keyword}/list?language=tr`, options)
        return response.json()
    } catch (error) {
        throw new Error(error)
    }
}

export const getDetail = async (keyword) => {
    try {
        const response = await fetch(`${baseURL}/${keyword}?language=tr-TR`, options)
        return response.json()
    } catch (error) {
        throw new Error(error)
    }
}

export const getCategoryList = async (cat, id) => {
    try {
        const response = await fetch(`${baseURL}/discover/${cat}?include_adult=false&include_video=false&language=tr-TR&page=1&sort_by=popularity.desc&with_genres=${id}`, options)
        return response.json()
    } catch (error) {
        throw new Error(error)
    }

}

export const getSearch = async (category, keyword) => {
    try {
        const response = await fetch(`${baseURL}/search/${category}?query=${keyword}&include_adult=false&language=tr-TR&page=1`, options)
        return response.json()
    } catch (error) {
        throw new Error(error)
    }
}

export const getVideoURL = async (cat, id) => {
    try {
        const response = await fetch(`${baseURL}/${cat}/${id}/videos?language=en-US`, options)
        return response.json()
    } catch (error) {
        throw new Error(error)
    }
}