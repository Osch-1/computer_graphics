namespace Domain;

public abstract class Block
{
    public abstract BlockKind Id { get; }
}


public class IBlock : Block
{
    public override BlockKind Id => BlockKind.I;
}

public class JBlock : Block
{
    public override BlockKind Id => BlockKind.J;
}

public class LBlock : Block
{
    public override BlockKind Id => BlockKind.L;
}

public class OBlock : Block
{
    public override BlockKind Id => BlockKind.O;
}

public class SBlock : Block
{
    public override BlockKind Id => BlockKind.S;
}

public class TBlock : Block
{
    public override BlockKind Id => BlockKind.T;
}

public class ZBlock : Block
{
    public override BlockKind Id => BlockKind.Z;
}

