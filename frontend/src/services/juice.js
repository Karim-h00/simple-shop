export const juiceService = (function(){
    const getJuice = async () => {
        const response = await (await fetch("http://localhost:3000/")).json();
        return response.juice
      }

    const update = async ({id, flavor, amount, price}) =>{
        try {
            await fetch("http://localhost:3000/", {
              method: "put",
              body: JSON.stringify({ id, flavor, amount, price }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
          } catch (err) {
           console.log(err);
          }
    }

    const add = async ({flavor, amount, price}) =>{
        await fetch("http://localhost:3000/", {
            method: "post",
            body: JSON.stringify({ flavor, amount, price }),
            headers: {
                'Content-Type': 'application/json',
            },
            });
        
    }

    const remove = async (id) =>{
        await fetch("http://localhost:3000/", {
            method: "DELETE",
            body: JSON.stringify({ id: id }),
            headers: {
              'Content-Type': 'application/json',
            },
          });
    }
    return{getJuice, update, add, remove}
  })();