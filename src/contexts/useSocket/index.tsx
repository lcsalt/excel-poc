import { useContext, createContext, ReactNode, useState, useRef } from 'react';
import { io } from "socket.io-client";
//TODO: INCOMPLETE
type Props = {children: ReactNode}
export type SocketType =  any;
export type SocketContextType = { socket: SocketType}

export const socketContext = createContext<SocketContextType>({} as SocketContextType);


export function ProvideSocket({ children }: Props) {
  const _socket = useProvideSocket();
  return <socketContext.Provider value={_socket}>{children}</socketContext.Provider>;
}

export default function useSocket() {
  return useContext(socketContext);
}

function useProvideSocket() {
  // const [socket, setSocket] = useState<SocketType | null>(null);
  const socketRef = useRef(io({ autoConnect: false }));

  return {
    socket: socketRef.current
  };
}
