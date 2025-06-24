"use client"

import axios from "axios";
import { useState, useEffect } from "react";
import Popup from "./Popup";
import CryptoJS from "crypto-js"
import dotenv from "dotenv"
dotenv.config()

const Form = () => {

    const [users, setUsers] = useState([])
    const [userid, setUserid] = useState("")
    const [message, setMessage] = useState("")
    const [isDone, setDone] = useState(false)

    useEffect(() => {
        getPosts()
    }, [])

    const saveMessage = (e) => {
        e.preventDefault();

        try {
            axios.post("https://api-cyberspacecb.vercel.app/messages", {
                user_id: userid,
                message: message
            })
                .then((res) => {
                    setDone(true)
                });
        } catch (error) {
            alert(error);
        }
    }

    const getPosts = async () => {
        await axios.get(`https://api-cyberspacecb.vercel.app/users`)
            .then(res => {
                const temp = res.data;
                console.log(res.data)
                setUsers(temp.data)
            })
    }


    return (
        <>
            {
                isDone && (
                    <Popup />
                )
            }
            <div className="w-full text-[#303030] p-3 flex flex-col gap-3 mt-5">
                <div>
                    <h1 className="font-semibold text-2xl">Time Capsule ⏱️</h1>
                    <p className="text-sm text-[#808080]">Tulisan kamu akan dibuka kembali saat wisuda nanti👨‍🎓</p>
                </div>

                <form onSubmit={saveMessage}>
                    <div className="flex flex-col gap-3">
                        <select name="name" id="name" className="w-full bg-white border-1 border-[#909090] rounded-md p-4 py-3" onChange={(e) => setUserid(e.target.value)}>
                            {
                                users.map((user) => (
                                    <option value={user.id} key={user.id}>{user.name}</option>
                                ))
                            }
                        </select>
                        <textarea name="message" id="message" rows={10}
                            placeholder="Tulis Pesan Di Sini ... "
                            className="w-full bg-white border-1 border-[#909090] rounded-md p-4"
                            onInput={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <button type="submit" className="bg-[#303030] w-full text-white font-bold p-4 py-3 rounded-md cursor-pointer">Kirim 💌</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
