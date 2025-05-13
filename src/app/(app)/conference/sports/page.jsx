import React from "react";
import Contents from "@/components/layout/contents";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Pilates from "./components/pilates";
import Asana from "./components/asana";
import Rhythmic from "./components/rhythmic";
import Artistic from "./components/artistic";
import Group from "./components/group";

export default function SportsPage() {
  return (
    <Contents title="종목" backgroundImage="/images/conference/kv_sports.png">
      <Tabs defaultValue="pilates">
        <TabsList className="mb-[30px]">
          <TabsTrigger value="pilates">필라테스</TabsTrigger>
          <TabsTrigger value="asana">요가 아사나</TabsTrigger>
          <TabsTrigger value="rhythmic">리드믹 요가</TabsTrigger>
          <TabsTrigger value="artistic">아티스틱 요가</TabsTrigger>
          <TabsTrigger value="group">단체전 요가</TabsTrigger>
        </TabsList>

        <TabsContent value="pilates">
          <Pilates />
        </TabsContent>
        <TabsContent value="asana">
          <Asana />
        </TabsContent>
        <TabsContent value="rhythmic">
          <Rhythmic />
        </TabsContent>
        <TabsContent value="artistic">
          <Artistic />
        </TabsContent>
        <TabsContent value="group">
          <Group />
        </TabsContent>
      </Tabs>
    </Contents>
  );
}
