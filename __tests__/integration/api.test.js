const assert = require('assert')
const axios = require('axios')

const URL = 'http://localhost:3000'

describe('Suite Case Test Api', () => {

    it("Rota GET expect code 200", async() => {
        await axios.get(URL)
            .then(function(response) {
                assert.deepEqual(response.data.code, 200)
            })
    })
    it('Rota POST expect code 200 ', async() => {
        await axios({
            method: 'post',
            url: `${URL}/create`,
            data: {
                login: 'Fred',
                senha: 'Flintstone'
            }
        }).then((response) => {
            assert.deepEqual(response.data.code, 200)
        })
    })
    it('Rota POST expect Request failed with status code 400 ', async() => {
        await axios({
            method: 'post',
            url: `${URL}/create`,
            data: {}
        }).catch(res => {
            assert.deepEqual('Error', res.name)
            assert.deepEqual('Request failed with status code 400', res.message)

        })

    })
    it('Rota PUT expect code 200 ', async() => {
        await axios({
            method: 'put',
            url: `${URL}/update`,
            data: {}
        }).then((response) => {
            assert.deepEqual(response.data.code, 200)
        })
    })
    it('Rota PATCH expect code 200 ', async() => {
        await axios({
            method: 'patch',
            url: `${URL}/update`,
            data: {}
        }).then((response) => {
            assert.deepEqual(response.data.code, 200)
        })
    })
    it('Rota DELETE expect code 200 ', async() => {
        await axios({
            method: 'delete',
            url: `${URL}/1`
        }).then((response) => {
            assert.deepEqual(response.data.code, 200)
        })
    })
    it('Rota DELETE expect Request failed with status code 400 ', async() => {
        await axios({
            method: 'delete',
            url: `${URL}/nao e numero`
        }).catch(res => {
            assert.deepEqual('Error', res.name)
            assert.deepEqual('Bad Request', res.response.statusText)
            assert.deepEqual(res.response.status, 400)
            assert.deepEqual('Request failed with status code 400', res.message)

        })
    })
})