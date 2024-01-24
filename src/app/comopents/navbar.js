"use client";
import { useEffect } from "react";
import { useClient } from "next/client";

function BootstrapClient() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);
}

export default BootstrapClient;
