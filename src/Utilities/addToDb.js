import { toast, Bounce } from "react-toastify";
const getStoreApp = () => {
    const appStoredStr = localStorage.getItem('downloads');
    if (appStoredStr) {
        const storedAppData = JSON.parse(appStoredStr);
        return storedAppData;
    }
    else {
        return [];
    }
}

const addToDb = (id) => {
    const storedAppData = getStoreApp();
    if (storedAppData.includes(id)) {

        toast.error('This , app is already installed', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }
    else {
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("downloads", data)
        toast.success('App Installed', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
    }

}

const removeItem = (id) => {
    const apps = JSON.parse(localStorage.getItem('downloads')) || [];
    const updatedApps = apps.filter(app => app !== id);
    localStorage.setItem('downloads', JSON.stringify(updatedApps));

}

export { addToDb, getStoreApp, removeItem }