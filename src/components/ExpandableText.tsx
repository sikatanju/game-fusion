/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
    children: string;
}

const ExpandableText = ({ children }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if (!children) return null;

    if (children.length <= limit) return <Text>{children}</Text>;

    const summary = expanded ? children : children.substring(0, limit) + "...";
    return (
        <Text>
            {summary}

            <Button
                marginStart={1}
                size="xs"
                fontWeight="bold"
                colorScheme="blue"
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? "Show less" : "Show More"}
            </Button>
        </Text>
    );
};

export default ExpandableText;
