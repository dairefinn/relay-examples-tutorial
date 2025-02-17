import * as React from "react";
import Image from "./Image";
import { graphql } from "relay-runtime";
import { useFragment, useQueryLoader } from "react-relay";
import type { PosterBylineFragment$key } from "./__generated__/PosterBylineFragment.graphql";
import { useRef } from "react";
import Hovercard from "./Hovercard";
import PosterDetailsHovercardContents, { PosterDetailsHovercardContentsQuery } from "./PosterDetailsHovercardContents";
import type {PosterDetailsHovercardContentsQuery as HovercardQueryType} from './__generated__/PosterDetailsHovercardContentsQuery.graphql';

const PosterByLineFragment = graphql`
  fragment PosterBylineFragment on Actor {
    id
    name
    profilePicture {
      ...ImageFragment
    }
  }
`;

export type Props = {
  poster: PosterBylineFragment$key
};

export default function PosterByline({ poster }: Props): React.ReactElement {
  if (poster == null) {
    return null;
  }

  const [
    hovercardQueryRef,
    loadHoverCardQuery
  ] = useQueryLoader<HovercardQueryType>(PosterDetailsHovercardContentsQuery);

  function onBeginHover() {
    loadHoverCardQuery({posterID: data.id});
  }

  const data = useFragment(
    PosterByLineFragment,
    poster
  );
  const hoverRef = useRef(null);

  return (
    <div ref={hoverRef} className="byline">
      <Image image={data.profilePicture} width={60} height={60} className="byline__image" />
      <div className="byline__name">{data.name}</div>
      <Hovercard targetRef={hoverRef} onBeginHover={onBeginHover}>
        <PosterDetailsHovercardContents queryRef={hovercardQueryRef}/>
      </Hovercard>
    </div>
  );
}
